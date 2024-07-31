'use client';

import { usePathSegments } from '@/hooks/usePathSegments';
import capitalize from 'lodash/capitalize';
import Link from 'next/link';
import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/molecules/Breadcrumb';

const generatePath = (segments: string[], endIdx: number): string => {
  let path = '/';
  for (let idx = 0; idx <= endIdx; idx++) {
    path += segments[idx];
    if (idx < endIdx) path += '/';
  }

  return path;
};

const NavigationTrace = () => {
  const segments = usePathSegments();

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {segments.map((segment, idx) => {
          const isLast = idx === segments.length - 1;
          const title = capitalize(segment);
          const path = generatePath(segments, idx);

          return (
            <React.Fragment key={`breadcrumb-segment-${segment}`}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={path}>{title}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {isLast || <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export { NavigationTrace };
