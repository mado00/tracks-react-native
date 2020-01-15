// Reusuable hook for managing location updates
import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  // const [subscriber, setSubscriber] = useState(null);

  // First call
  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          },
        // callback in TrackCreateScreen
        // const callback = useCallback((location) => {
        //   addLocation(location, state.recording)
        // }, [state.recording]);
          callback
        );
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
      //stop watching user's location
      subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);
  // maybe return multiple different values
  // nothing special about array 
  // just the convention of hooks
  return [err];
};
