import reducers from './redux/reducers'
import { createStore ,applyMiddleware } from 'redux'

import thunk from 'redux-thunk' //reducers 中可以调用函数，请求
// 持久化必须安装包
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root2',
    storage: storage,
};

let reducer = persistReducer(persistConfig, reducers);
let store = createStore(reducer, applyMiddleware(thunk));

export let persistor = persistStore(store);

export default store