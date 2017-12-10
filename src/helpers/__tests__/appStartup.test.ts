import appStartup from '../appStartup';
import app from '../../server/app';
jest.mock('../../server/app');

let originalLog: any;
app.get = jest.fn(() => '1234');

beforeEach(() => {
  originalLog = console.log;
  console.log = jest.fn();
});

afterEach(() => {
  console.log = originalLog;
});

test('should log the port the app is running on', () => {
  appStartup();
  expect(console.log).toBeCalledWith('Listening on port: 1234');
});

