import { Sparkles } from "@medusajs/icons";
import { Button, Container, Heading, Text } from "@medusajs/ui";

function App() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 bg-ui-bg-subtle">
      <div className="flex min-h-screen w-full items-center justify-center p-6 bg-ui-bg-subtle">
        <Container className="flex max-w-md flex-col items-center gap-y-4 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ui-bg-base shadow-elevation-card-rest">
            <Sparkles className="text-ui-fg-subtle" />
          </div>
          <div className="flex flex-col gap-y-1">
            <Heading level="h2" className="text-ui-fg-base">
              App Placeholder
            </Heading>
            <Text className="text-ui-fg-subtle" size="small">
              Start building your main view or layout here.
            </Text>
          </div>
          <Button variant="primary" size="small">
            Action
          </Button>
        </Container>
      </div>
    </div>
  );
}

export default App;
