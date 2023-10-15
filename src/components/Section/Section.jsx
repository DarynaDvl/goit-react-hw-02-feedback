import css from './Section.module.scss';

export const Section = ({ title, children }) => {
  return (
    <div>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </div>
  );
};
