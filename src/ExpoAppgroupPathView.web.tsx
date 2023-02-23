import * as React from 'react';

import { ExpoAppgroupPathViewProps } from './ExpoAppgroupPath.types';

export default function ExpoAppgroupPathView(props: ExpoAppgroupPathViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
