import produce from "immer";
import TagDataClass from "../../data/Tag";
import { SimpleMap } from "../../data/types";
import {
  ADD_TAG,
  AppAction,
  REMOVE_TAG,
  TOGGLE_TAG,
  ADD_ALIASES,
} from "../actions";

export interface TagsState {
  active: SimpleMap<TagDataClass>;
  aliases: SimpleMap<TagDataClass[]>;
}

export const initialTagsState: TagsState = {
  active: {},
  aliases: {},
};

const addTag = (state: TagsState, newTag: TagDataClass) =>
  produce(state, (draft) => {
    draft.active[newTag.name] = { ...state.active[newTag.name], ...newTag };
  });

const addAliases = (
  state: TagsState,
  aliases: TagDataClass[],
  forTag: string
) =>
  produce(state, (draft) => {
    draft.aliases[forTag] = aliases;
  });

const removeTag = (state: TagsState, tagToRemove: TagDataClass) =>
  produce(state, (draft) => {
    delete draft.active[tagToRemove.name];
    delete draft.aliases[tagToRemove.name];
  });

const toggleTag = (state: TagsState, tagToToggle: TagDataClass) =>
  state.active[tagToToggle.name]
    ? removeTag(state, tagToToggle)
    : addTag(state, tagToToggle);

export default (
  state: TagsState = initialTagsState,
  action: AppAction
): TagsState => {
  switch (action.type) {
    case ADD_TAG:
      return addTag(state, action.tag);
    case REMOVE_TAG:
      return removeTag(state, action.tag);
    case TOGGLE_TAG:
      return toggleTag(state, action.tag);
    case ADD_ALIASES:
      return addAliases(state, action.aliases, action.forTag);
    default:
      return state;
  }
};
