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

const highlights = ['Frontend Engineering', 'UI Systems', 'Product Polish', 'Design Systems'];

const works = [
  {
    title: 'Aurora Dashboard',
    text: 'Clean analytics surfaces with a calm visual hierarchy and fast interactions.',
    impact: 'Reduced onboarding time by 28%',
  },
  {
    title: 'SwiftCart Mobile',
    text: 'A high-conversion checkout flow designed with clarity and minimal friction.',
    impact: 'Increased checkout completion by 19%',
  },
  {
    title: 'Focus Notes',
    text: 'A distraction-free writing space with elegant typography and quick sync.',
    impact: 'Reached 15k+ monthly active users',
  },
];

const processSteps = [
  'Discover: understand users, business goals, and product constraints.',
  'Design: map clean flows and craft thoughtful visual direction.',
  'Build: ship performant interfaces with reusable components.',
  'Polish: improve micro-interactions, accessibility, and speed.',
];

export default function PortfolioApp() {
  return (
    <App theme="ios" className="portfolio-shell">
      <Page>
        <Navbar title="Mohammad Hasan Mahmud" subtitle="Personal Portfolio" />

        <Block className="hero-block frost-card">
          <p className="eyebrow">Crafting digital products</p>
          <h1>Simple, modern experiences with Apple-inspired polish.</h1>
          <p>
            I design and build web products that feel intuitive, premium, and focused on what matters most.
          </p>
          <div className="chip-row">
            {highlights.map((item) => (
              <Chip key={item} outline>
                {item}
              </Chip>
            ))}
          </div>
          <div className="hero-actions">
            <Button large tonal component="a" href="mailto:mohammad@example.com">
              Book a Call
            </Button>
            <Link className="text-link" href="#work">
              View Work
            </Link>
          </div>
        </Block>

        <BlockTitle id="work">Selected Work</BlockTitle>
        <Block className="card-grid">
          {works.map((work) => (
            <Card key={work.title} outline className="work-card frost-card">
              <h3>{work.title}</h3>
              <p>{work.text}</p>
              <span>{work.impact}</span>
            </Card>
          ))}
        </Block>

        <BlockTitle>How I Work</BlockTitle>
        <List inset strong className="process-list frost-card">
          {processSteps.map((step) => (
            <ListItem key={step} title={step} />
          ))}
        </List>

        <BlockTitle>About</BlockTitle>
        <Card outline className="about-card frost-card">
          <p>
            I’m Mohammad Hasan Mahmud, a frontend-focused developer passionate about building interfaces that are
            minimal, purposeful, and delightful to use. I care deeply about typography, spacing, motion, and product
            clarity.
          </p>
        </Card>

        <BlockTitle>Contact</BlockTitle>
        <List inset strong className="contact-list frost-card">
          <ListItem title="Email" subtitle="mohammad@example.com" />
          <ListItem title="Location" subtitle="Bangladesh" />
          <ListItem title="Availability" subtitle="Open for freelance and full-time opportunities" />
        </List>

        <Block className="cta-wrap">
          <Button large component="a" href="mailto:mohammad@example.com">
            Let’s Build Something Great
          </Button>
          <Link className="text-link" href="https://www.linkedin.com" target="_blank">
            LinkedIn
          </Link>
        </Block>
      </Page>
    </App>
  );
}
