import MainTemplate from "@/components/templates/mainTemplate";
import "@/styles/globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className="bg-baseColor">
        <main>
          <MainTemplate>{children}</MainTemplate>
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
