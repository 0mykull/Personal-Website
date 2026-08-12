import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const Portfolio = () => {
  return (
    <Layout title="Portfolio">
      <Container>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Code
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="gitty"
              title="Gitty"
            >
              A beautiful, modern, and fast Git CLI tool featuring AI-powered commit messages and a stunning terminal UI.
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="nvim-fountain"
              title="Neovim Screenwriting Plugin"
            >
              A Neovim plugin to write screenplays, rewritten in Lua with Treesitter parsing
            </WorkGridItem>
          </Section>

          <Section delay={0.2}>
            <WorkGridItem
              id="drako"
              title="Drako"
            >
              A better linux mkdir command
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem
              id="spd"
              title="SPD"
            >
              A command-line tool or script
            </WorkGridItem>
          </Section>

        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Portfolio
