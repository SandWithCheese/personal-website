function BodyLayout({ children }: { children: React.ReactNode }) {
  return (
    <body>
      <main>{children}</main>
    </body>
  );
}

export default BodyLayout;
