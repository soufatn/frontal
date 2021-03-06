import { Action } from './actions';
import { FrontalItemDirective } from './frontal.component';

export interface State {
  selectedItem: any;
  highlightedIndex: number | null;
  inputValue: string;
  inputText: string;
  isOpen: boolean;
  reducer: (state: State, action: Action) => Action;
  itemToString: (value: any) => string;
}

export const initialState: State = {
  selectedItem: null,
  highlightedIndex: null,
  inputValue: '',
  inputText: '',
  isOpen: false,
  reducer: (state: State, action: Action) => action,
  itemToString: (value: any) => value,
};
