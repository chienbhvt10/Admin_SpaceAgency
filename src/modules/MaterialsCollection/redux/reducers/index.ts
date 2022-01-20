import { combineReducers } from 'redux';
import { MaterialsState, CreateMaterialsState } from '../action-types';
import materials from './list-materials';
import createMaterials from './create-materials';

export interface MaterialsModuleState {
  materialsState: MaterialsState;
  createMaterialsState: CreateMaterialsState;
}

export default combineReducers<MaterialsModuleState>({
  materialsState: materials,
  createMaterialsState: createMaterials,
});
