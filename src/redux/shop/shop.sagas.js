import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.js';

import { 
    fetchCollectionsSuccess, 
    fetchCollectionsFailure
} from './shop.actions.js';

import ShopActionTypes from './shop.types.js';

export function* fetchCollectionsAsync() {
    yield console.log("sagaAsync");

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const CollectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(CollectionsMap));
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield(all([call(fetchCollectionsStart)]))
}