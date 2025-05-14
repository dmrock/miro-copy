import { ROUTES } from '@/shared/model/routs';
import { href, Link } from 'react-router-dom';

function BoardsListPage() {
  return (
    <div>
      <h1>Boards list</h1>

      <Link to={href(ROUTES.BOARD, { boardId: '1' })}>Board 1</Link>
    </div>
  );
}

export const Component = BoardsListPage;
