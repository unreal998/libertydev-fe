import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { mainPageSlice } from '../modules/mainPage/reducer';

const slices = [mainPageSlice];

const toolkitReducers = Object.fromEntries(
  slices.map(({ name, reducer }) => [name, reducer]),
);

export const rootReducer = combineReducers({
  ...toolkitReducers,
});

export type AppSate = StateType<typeof rootReducer>;
