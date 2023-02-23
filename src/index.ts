import ExpoAppgroupPathModule from './ExpoAppgroupPathModule';

// Get the native constant value.
export function getPath(group: string): string {
  return ExpoAppgroupPathModule.getPath(group);
}
