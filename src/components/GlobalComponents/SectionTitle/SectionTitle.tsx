import "./SectionTitle.css";
interface SectionTitleProps {
  title?: string;
}
function SectionTitle({ title }: SectionTitleProps) {
  const titleArr = title?.split(" ") || [];
  return (
    <div className="sectionTitle">
      {titleArr[0]} <span>{titleArr[1]}</span>
    </div>
  );
}

export default SectionTitle;
