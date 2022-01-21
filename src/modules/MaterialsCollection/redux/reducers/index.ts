import { combineReducers } from 'redux';
import { MaterialsState, CreateMaterialsState, RemoveMaterialState, DetailMaterialState } from '../action-types';
import materials from './list-materials';
import createMaterials from './create-materials';
import removeMaterial from './remove-material';
import detailMaterial from './detail-material';

export interface MaterialsModuleState {
  materialsState: MaterialsState;
  createMaterialsState: CreateMaterialsState;
  removeMaterialState: RemoveMaterialState;
  detailMaterialState: DetailMaterialState;
}

export default combineReducers<MaterialsModuleState>({
  materialsState: materials,
  createMaterialsState: createMaterials,
  removeMaterialState: removeMaterial,
  detailMaterialState: detailMaterial,
});
