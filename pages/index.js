import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  chakra,
  UnorderedList
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioYear, BioSection } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
import ContactMe from '../components/contactme'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Michael Sousa
          </Heading>
          <Box
            borderRadius="lg"
            mb={6}
            p={1}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <p>Software Engineer</p>
          </Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="80px"
            h="100px"
            display="inline-block"
            borderRadius="md"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/headshot.png"
              alt="Profile image"
              borderRadius="md"
              width="80"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph mb={6} pb={3}>
          Hello! I&apos;m Michael Sousa, a passionate Software Engineer based in Orlando, FL. 
          I love building robust digital experiences, optimizing architectures, and diving deep into open-source.
        </Paragraph>
        
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/portfolio"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            transition="all 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            My Projects
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>2026</BioYear>
          <b>Play-Solana</b> - Software Engineering Fellowship (via MLH)
          <UnorderedList mt={2} mb={4} ml={12}>
            <ListItem>Restructured developer architecture to support web-based games, establishing integration frameworks for PSG1, PlayGate, PlayVerse, and MCP protocols.</ListItem>
            <ListItem>Deployed and stress-tested sample games using the Unity SDK and MCP framework, authoring documentation to streamline developer onboarding.</ListItem>
            <ListItem>Audited repositories and production apps, shipping frontend optimizations and resolving critical console errors via GitHub PRs.</ListItem>
          </UnorderedList>
        </BioSection>
        <BioSection>
          <BioYear>2026</BioYear>
          <b>MagicBlock</b> - Software Engineering Fellowship (via MLH)
          <UnorderedList mt={2} mb={4} ml={12}>
            <ListItem>Optimized core SDK performance, reducing onboarding setup time by 30% and improving API response times via open-source contributions.</ListItem>
            <ListItem>Developed a Telegram bot using the MagicBlock SDK to validate Ephemeral Rollups, achieving &lt;50ms transaction latency for 1,000+ concurrent users.</ListItem>
            <ListItem>Collaborated with DevRel stakeholders to resolve developer friction points, refining open-source repositories and technical documentation.</ListItem>
          </UnorderedList>
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          <b>Meta</b> - Production Engineering Fellowship (via MLH)
          <UnorderedList mt={2} mb={4} ml={12}>
            <ListItem>Collaborated with engineers on projects, supplemented with events / workshops hosted by industry experts.</ListItem>
            <ListItem>Created an open-source web-app using Python, Flask, Jinja, MySQL, Nginx, and unittests.</ListItem>
            <ListItem>Automated testing and deployment workflows using CI/CD on Linux environments.</ListItem>
            <ListItem>Set up system and container monitoring, alerting, and visualization using Prometheus and Grafana.</ListItem>
          </UnorderedList>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2026</BioYear>
          MS, Software Engineering (DevOps Track) - Western Governors University
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          BA, Computer Science - Florida State University
        </BioSection>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Paragraph>
          <b>Programming Languages:</b> Python, Go, Rust, JavaScript, SQL, Bash<br />
          <b>Web Frameworks & Frontend:</b> Flask, HTML/CSS, Jinja, NextJS, TailwindCSS<br />
          <b>Infrastructure & Production Support:</b> Docker, AWS, GCP, Nginx, MySQL, Prometheus, Grafana<br />
          <b>Practices:</b> Agile Methodology, CI/CD Release Processes, System Architecture, DevOps<br />
          <b>Languages Spoken:</b> English (Native), Spanish (Proficient)
        </Paragraph>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Certificates
        </Heading>
        <Paragraph>
          Github Foundations, Hackerrank Go (Intermediate), Python Programmer (PCEP), Datacamp Data Engineer
        </Paragraph>
      </Section>

      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          My Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/0mykull" target="_blank" style={{ textDecoration: 'none' }}>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
                transition="all 0.2s"
                _hover={{ transform: 'scale(1.05)' }}
              >
                Github Profile
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/in/michael-sousa" target="_blank" style={{ textDecoration: 'none' }}>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
                transition="all 0.2s"
                _hover={{ transform: 'scale(1.05)' }}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Contact Me
        </Heading>
        <Paragraph mb={4}>
          Orlando, FL | (352)-426-9226 | hi@msjr.dev
        </Paragraph>

        <ContactMe />
      </Section>
    </Container>
  </Layout>
)

export default Home
