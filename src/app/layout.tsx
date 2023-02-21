
import StyledComponentsRegistry from "@lib/styledComponentsRegistry";
import GlobalStyle from "@styles/global";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <div>
            {children}
            <GlobalStyle />
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}