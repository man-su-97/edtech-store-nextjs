export default function CourseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className=" border-dotted border-2 border-slate-200">
        <h2 className="text-center text-xl text-red-500 ">Course Layout</h2>
        {children}
      </div>
    </>
  );
}
