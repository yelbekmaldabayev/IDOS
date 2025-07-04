import Link from 'next/link';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TimelineItem } from './timeline-item';

const ActivitiesUpcomingContent = () => {
  return (
    <TimelineItem icon={Share2} line={true}>
      <div className="flex flex-col">
        <div className="text-sm text-gray-800">
          I couldn't resist sharing a sneak peek of our{' '}
          <Button variant="link" asChild>
            <Link href="/public-profile/profiles/blogger">
              upcoming content
            </Link>
          </Button>
        </div>
        <span className="text-xs text-gray-600">5 days ago, 4:07 PM</span>
      </div>
    </TimelineItem>
  );
};

export { ActivitiesUpcomingContent };
