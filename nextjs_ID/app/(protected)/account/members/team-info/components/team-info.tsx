'use client';

import { AvatarInput } from '@/partials/common/avatar-input';
import { SquarePen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

interface ITeamInfoItem {
  label: string;
}
type ITeamInfoItems = Array<ITeamInfoItem>;

const TeamInfo = () => {
  const skills: ITeamInfoItems = [
    { label: 'Management' },
    { label: 'Web Design' },
    { label: 'Code Review' },
    { label: 'No-code' },
    { label: 'Webflow' },
    { label: 'AI' },
  ];

  const renderItem = (skill: ITeamInfoItem, index: number) => {
    return (
      <Badge key={index}>
        {skill.label}
      </Badge>
    );
  };

  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Team Info</CardTitle>
        <div className="flex items-center space-x-2">
          <Label htmlFor="size-sm" className="text-sm">
            Visible to all
          </Label>
          <Switch id="size-sm" />
        </div>
      </CardHeader>
      <CardContent className="card-table kt-scrollable-x-auto pb-3 p-0">
        <Table className="align-middle text-sm">
          <TableBody>
            <TableRow>
              <TableCell className="py-2 min-w-32 text-secondary-foreground font-normal">
                Thumbnail
              </TableCell>
              <TableCell className="py-2 text-secondary-foreground font-normal min-w-32 text-sm">
                150x150px JPEG, PNG Image
              </TableCell>
              <TableCell className="py-2 text-center min-w-16">
                <AvatarInput />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-2 text-secondary-foreground font-normal">
                Team Name
              </TableCell>
              <TableCell className="py-2 text-secondary-foreground font-normal">
                Product Management
              </TableCell>
              <TableCell className="py-2 text-center">
                <Button variant="ghost">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-2 text-secondary-foreground font-normal">
                Description
              </TableCell>
              <TableCell className="py-2 text-secondary-foreground font-normal">
                We're open to partnerships, guest posts, and more. Join us to
                share your insights and grow your audience.
              </TableCell>
              <TableCell className="py-2 text-center">
                <Button variant="ghost">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                View as
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground">
                <Badge variant="secondary">
                  Public
                </Badge>
              </TableCell>
              <TableCell className="py-3 text-center">
                <Button variant="ghost">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Skills
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground">
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill, index) => {
                    return renderItem(skill, index);
                  })}
                </div>
              </TableCell>
              <TableCell className="py-3 text-center">
                <Button variant="ghost">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export { TeamInfo, type ITeamInfoItem, type ITeamInfoItems };
