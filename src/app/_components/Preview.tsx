type MyComponentProps = {
  title?: string;
}; // Placeholder for Preview props types. can use interface instead of type as well.

function Preview({ title }: MyComponentProps) {
  return (
    <div className="preview-container flex flex-col items-center p-10">
      <div className="image-preview h-100 w-100 bg-amber-600/75"/> 
    </div>
  );
};

export default Preview;