import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const { id, title, titleTh, genre, year, rating, poster } = movie;

  return (
    <Link to={`/movies/${id}`}
          className="group overflow-hidden rounded-xl border border-emerald-100 bg-white transition hover:shadow-md">
      {poster ? (
        <img src={poster} alt={`โปสเตอร์ ${title}`} loading="lazy"
             className="aspect-[2/3] w-full object-cover" />
      ) : (
        <div className="flex aspect-[2/3] w-full items-center justify-center bg-slate-100 text-sm text-slate-400">
          ไม่มีโปสเตอร์
        </div>
      )}
      <div className="space-y-1 p-3">
        <h3 className="line-clamp-1 font-medium text-slate-900 group-hover:text-emerald-600">
          {titleTh || title}
        </h3>
        {titleTh && <p className="line-clamp-1 text-xs text-slate-400">{title}</p>}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{[genre, year].filter(Boolean).join(' · ')}</span>
          {rating != null && <span className="text-amber-500">★ {rating}</span>}
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
