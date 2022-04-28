import { useDebugValue, useRef } from 'react';
import uniqueId from 'lodash/uniqueId';
/**
 * Used for generating unique ID for DOM elements
 */

export default function useInternalId(prefix) {
  var idRef = useRef();

  if (!idRef.current) {
    idRef.current = uniqueId("internal://" + prefix);
  }

  useDebugValue(idRef.current);
  return idRef.current;
}