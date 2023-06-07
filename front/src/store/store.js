import { configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        map: mapReducer,
    }
});

export default store;