import {
  App,
  Block,
  BlockTitle,
  Button,
  Card,
  Chip,
  Link,
  List,
  ListItem,
  Navbar,
  Page,
} from 'konsta/react';

const highlights = ['Frontend Engineering', 'UI Systems', 'Product Polish'];

const works = [
  {
    title: 'Aurora Dashboard',
    text: 'Clean analytics surfaces with a calm visual hierarchy and fast interactions.',
  },
  {
    title: 'SwiftCart Mobile',
    text: 'A high-conversion checkout flow designed with clarity and minimal friction.',
  },
  {
    title: 'Focus Notes',
    text: 'A distraction-free writing space with elegant typography and quick sync.',
  },
];

export default function PortfolioApp() {
  return (
    <App theme="ios" className="portfolio-shell">
      <Page>
        <Navbar title="Mohammad Hasan Mahmud" subtitle="Personal Portfolio" />

        <Block className="hero-block">
          <h1>Simple, modern experiences with Apple-inspired polish.</h1>
          <p>
            I design and build web products that feel intuitive, premium, and focused on what matters.
          </p>
          <div className="chip-row">
            {highlights.map((item) => (
              <Chip key={item} outline>
                {item}
              </Chip>
            ))}
          </div>
        </Block>

        <BlockTitle>Selected Work</BlockTitle>
        <Block className="card-grid">
          {works.map((work) => (
            <Card key={work.title} outline className="work-card">
              <h3>{work.title}</h3>
              <p>{work.text}</p>
            </Card>
          ))}
        </Block>

        <BlockTitle>Contact</BlockTitle>
        <List inset strong className="contact-list">
          <ListItem title="Email" subtitle="mohammad@example.com" />
          <ListItem
            title="Availability"
            subtitle="Open for freelance and full-time opportunities"
          />
        </List>

        <Block className="cta-wrap">
          <Button large tonal component="a" href="mailto:mohammad@example.com">
            Let’s Talk
          </Button>
          <Link className="text-link" href="https://www.linkedin.com" target="_blank">
            LinkedIn
          </Link>
        </Block>
      </Page>
    </App>
  );
}
