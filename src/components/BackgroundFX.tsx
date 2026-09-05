export default function BackgroundFX() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 noise-grid" />
      <div
        className="blob bg-accent-1 w-[38rem] h-[38rem] -top-40 -left-40"
      />
      <div
        className="blob bg-accent-3 w-[30rem] h-[30rem] top-1/3 -right-32"
      />
      <div
        className="blob bg-accent-2 w-[26rem] h-[26rem] bottom-0 left-1/4"
      />
    </div>
  );
}
