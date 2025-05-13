import type { PathParams } from '@/shared/model/routs';
import { ROUTES } from '@/shared/model/routs';
import { useParams } from 'react-router-dom';

export function BoardPage() {
  const params = useParams<PathParams[typeof ROUTES.BOARD]>();

  return <div>Board page {params.boardId}</div>;
}
