import * as ReactDOM from 'react-dom';
import { client } from '../client';
jest.mock('react-dom');

test('should call hydrate', () => {
  expect(ReactDOM.hydrate).toBeCalledWith(
    client,
    document.querySelector('#root'),
  );
});
