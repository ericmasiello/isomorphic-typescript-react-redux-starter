import '../index';
import app from '../server/app';
import appStartup from '../helpers/appStartup';
jest.mock('../server/app');

const mockListen = jest.fn();
(app.listen as any).mockImplementation(mockListen);

test('should start the app', () => {
  expect(app.listen).toBeCalledWith(app.get('port') || 3000, appStartup);
});
