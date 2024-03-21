import { AnyAction, Middleware } from 'redux'
import { logAction } from '../metrics/logAction'
import { RootState } from './store'

export const logActionMiddleware: Middleware<{}, RootState> = (storeAPI) => {
  return function wrapDispatch(next) {
    return function handleAction(action: AnyAction) {
      logAction(action)
      next(action)
    }
  }
}
