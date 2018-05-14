import { AnyAction } from 'redux';

export interface DispatchableAction extends AnyAction {
  type: string;
  payload?: any;
}
