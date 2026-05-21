import { Button } from './button'

export function ExploreButtons() {
  return (
    <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
      <Button href="/contact">Request a demo</Button>
      <Button variant="secondary" href="/developers">
        Deploy CARE{' '}
      </Button>
      <Button variant="secondary" href="https://github.com/ohcnetwork">
        Explore the code
      </Button>
    </div>
  )
}
