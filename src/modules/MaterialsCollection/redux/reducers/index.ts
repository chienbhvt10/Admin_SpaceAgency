import { combineReducers } from 'redux';
import { MaterialsState } from '../action-types';
import materials from './list-materials';

export interface MaterialsModuleState {
  materialsState: MaterialsState;
}

export default combineReducers<MaterialsModuleState>({
  materialsState: materials,
});
