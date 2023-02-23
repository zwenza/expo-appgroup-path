import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoAppgroupPathViewProps } from './ExpoAppgroupPath.types';

const NativeView: React.ComponentType<ExpoAppgroupPathViewProps> =
  requireNativeViewManager('ExpoAppgroupPath');

export default function ExpoAppgroupPathView(props: ExpoAppgroupPathViewProps) {
  return <NativeView {...props} />;
}
