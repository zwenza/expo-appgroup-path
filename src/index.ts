import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoAppgroupPath.web.ts
// and on native platforms to ExpoAppgroupPath.ts
import ExpoAppgroupPathModule from './ExpoAppgroupPathModule';
import ExpoAppgroupPathView from './ExpoAppgroupPathView';
import { ChangeEventPayload, ExpoAppgroupPathViewProps } from './ExpoAppgroupPath.types';

// Get the native constant value.
export const PI = ExpoAppgroupPathModule.PI;

export function hello(): string {
  return ExpoAppgroupPathModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoAppgroupPathModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoAppgroupPathModule ?? NativeModulesProxy.ExpoAppgroupPath);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoAppgroupPathView, ExpoAppgroupPathViewProps, ChangeEventPayload };
