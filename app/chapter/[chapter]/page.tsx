export default function Chapter({
  params: { chapter },
}: {
  params: { chapter: string };
}) {
  return (
    <div>
      <div>{chapter}</div>
    </div>
  );
}
