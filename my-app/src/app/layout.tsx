import MainTemplate from "@/components/templates/mainTemplate";
import "@/styles/globals.css";
import { Providers } from "@/app/providers";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <html lang="ja">
        <body className="bg-baseColor">
          <main>
            <MainTemplate>{children}</MainTemplate>
          </main>
        </body>
      </html>
    </Providers>
  );
};
export default RootLayout;
