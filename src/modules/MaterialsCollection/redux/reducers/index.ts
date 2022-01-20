import { combineReducers } from 'redux';
import { MaterialsState, CreateMaterialsState, RemoveMaterialState } from '../action-types';
import materials from './list-materials';
import createMaterials from './create-materials';
import removeMaterial from './remove-material';
import detailMaterial from './detail-material';
import { DetailUserState } from 'modules/UserManagement/redux/action-types';

export interface MaterialsModuleState {
  materialsState: MaterialsState;
  createMaterialsState: CreateMaterialsState;
  removeMaterialState: RemoveMaterialState;
  detailMaterialState: DetailUserState;
}

export default combineReducers<MaterialsModuleState>({
  materialsState: materials,
  createMaterialsState: createMaterials,
  removeMaterialState: removeMaterial,
  detailMaterialState: detailMaterial,
});
