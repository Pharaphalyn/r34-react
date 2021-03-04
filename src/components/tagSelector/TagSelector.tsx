import React, { useState, useCallback } from 'react'
import styled, { css } from 'styled-components'
import api from '../../misc/api'
import { prepareTag } from '../../misc/prepare'
import { AddButton, ModifierButton } from '../common/Buttons'
import TagInput from './TagInput'
import DropdownList from './DropdownList'
import { useDispatch, useSelector } from 'react-redux'
import { addTag } from '../../redux/actions'
import { ThemeType } from '../../misc/theme'
import { selectTagSuggestionCount } from '../../redux/selectors'
import useThrottledEffect from '../../hooks/useThrottledEffect'
import useModifier from '../../hooks/useModifier'
import { serializeTagname } from '../../misc/formatting'
import { TagLike } from '../../data/types'

const TagSelectorWrapper = styled.div(
  (props: { closed: boolean; ref: (ref: HTMLInputElement) => void; theme: ThemeType }) => css`
    display: flex;
    background: white;
    ${props.closed
      ? css`
          border-radius: ${props.theme.dimensions.borderRadius};
        `
      : css`
          border-radius: ${props.theme.dimensions.borderRadius} ${props.theme.dimensions.borderRadius} 0 0;

          > ${AddButton} {
            border-radius: 0 ${props.theme.dimensions.borderRadius} 0 0;
          }

          > ${ModifierButton} {
            border-radius: ${props.theme.dimensions.borderRadius} 0 0 0;
          }
        `}
  `
)

export default function TagSelector() {
  const dispatch = useDispatch()

  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState<TagLike[]>([])
  const [tagSelectorRef, setTagSelectorRef] = useState<HTMLDivElement | null>(null)
  const [modifier, nextModifier] = useModifier()

  const tagSuggestionsCount = useSelector(selectTagSuggestionCount)

  const activateTag = useCallback(
    ({ name, posts, types }) => {
      dispatch(
        addTag(
          prepareTag({
            name,
            types,
            modifier,
            count: posts,
          })
        )
      )

      setValue('')
      setSuggestions([])
    },
    [dispatch, modifier]
  )

  useThrottledEffect(
    async () => {
      if (!value) {
        setSuggestions([])
        return
      }

      const newSuggestions = await api.getTags(serializeTagname(value), tagSuggestionsCount)

      setSuggestions(newSuggestions)
    },
    300,
    [tagSuggestionsCount, value]
  )

  const onAddClick = useCallback(() => {
    if (value && value.trim()) {
      const sanitizedTagname = serializeTagname(value)
      const suggestion = suggestions.find((s) => s.name === sanitizedTagname) || {}
      activateTag({ ...suggestion, name: value })
    }
  }, [value, activateTag, suggestions])

  return (
    <TagSelectorWrapper ref={setTagSelectorRef} closed={suggestions.length === 0}>
      <ModifierButton onClick={nextModifier} aria-label='Tag Modifier'>
        {modifier}
      </ModifierButton>
      <TagInput value={value} setValue={setValue} onSubmit={onAddClick} />
      <AddButton onClick={onAddClick} aria-label='Add Tag'>
        Add
      </AddButton>
      {suggestions.length > 0 && (
        <DropdownList tagSelectorRef={tagSelectorRef} entries={suggestions} onClick={activateTag} />
      )}
    </TagSelectorWrapper>
  )
}
