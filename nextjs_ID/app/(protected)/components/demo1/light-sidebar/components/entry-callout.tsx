import { Fragment } from 'react';
import Link from 'next/link';
import { AvatarGroup } from '@/partials/common/avatar-group';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface IEntryCalloutProps {
  className: string;
}

const EntryCallout = ({ className }: IEntryCalloutProps) => {
  return (
    <Fragment>
      <style>
        {`
          .entry-callout-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/2.png')}');
          }
          .dark .entry-callout-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/2-dark.png')}');
          }
        `}
      </style>

      <Card className={`h-full ${className}`}>
        <CardContent className="p-10 bg-[length:80%] rtl:[background-position:-70%_25%] [background-position:175%_25%] bg-no-repeat entry-callout-bg">
          <div className="flex flex-col justify-center gap-4">
            <AvatarGroup

              group={[
                { filename: '300-4.png' },
                { filename: '300-1.png' },
                { filename: '300-2.png' },
                {
                  fallback: 'S',
                  variant: 'text-white text-xs ring-background bg-green-500',
                },
              ]}
            />
            <h2 className="text-xl font-semibold text-mono">
              Connect Today & Join <br />
              the{' '}
              <Button variant="link" asChild className="text-xl font-semibold">
                <Link href="#">KeenThemes Network</Link>
              </Button>
            </h2>
            <p className="text-sm font-normal text-secondary-foreground leading-5.5">
              Enhance your projects with premium themes and <br />
              templates. Join the KeenThemes community today <br />
              for top-quality designs and resources.
            </p>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Button variant="link" asChild>
            <Link href="#">Get Started</Link>
          </Button>
        </CardFooter>
      </Card>
    </Fragment>
  );
};

export { EntryCallout, type IEntryCalloutProps };
