# merapartechnologies.com

This repo contains the source code for
[merapartechnologies.com](https://merapartechnologies.com). All of the site's content is written in
[Markdown](http://daringfireball.net/projects/markdown/syntax).

Everything you push into the gh-pages branch goes live immediately!

## Testing locally

To test your changes locally use

    # rake

to generate your site in the \_site directory, or

    # rake server

To start Jekyll server locally.

## Contributing

1. Fork this repo to your account.
2. Clone the fork.
3. Run `bundle install` in the root of the freshly cloned repo. This
   will install Jekyll, the tool we use to build the site.
4. Run `jekyll serve --watch` and open your browser to http://localhost:4000.
5. Make some changes, refresh your browser to preview them.
6. Submit a pull request.

## Development dependencies

For development on i.e. the Mac, you need certain tools.
1. Install Ruby
2. Install bundler: `gem install bundler`

## FAQ

Q: When running `jekyll serve --watch`, I get an `Gem::LoadError` error!?
A: Try executing `bundle exec jekyll serve --watch` instead.
