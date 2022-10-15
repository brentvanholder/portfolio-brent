# -*- encoding: utf-8 -*-
# stub: rails_live_reload 0.3.1 ruby lib

Gem::Specification.new do |s|
  s.name = "rails_live_reload".freeze
  s.version = "0.3.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Igor Kasyanchuk".freeze, "Liubomyr Manastyretskyi".freeze]
  s.date = "2022-09-25"
  s.description = "Ruby on Rails Live Reload with just a single line of code - just add the gem to Gemfile.".freeze
  s.email = ["igorkasyanchuk@gmail.com".freeze, "manastyretskyi@gmail.com".freeze]
  s.homepage = "https://github.com/railsjazz/rails_live_reload".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.3.7".freeze
  s.summary = "Ruby on Rails Live Reload".freeze

  s.installed_by_version = "3.3.7" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<railties>.freeze, [">= 0"])
    s.add_runtime_dependency(%q<listen>.freeze, [">= 0"])
    s.add_runtime_dependency(%q<websocket-driver>.freeze, [">= 0"])
    s.add_runtime_dependency(%q<nio4r>.freeze, [">= 0"])
    s.add_development_dependency(%q<wrapped_print>.freeze, [">= 0"])
  else
    s.add_dependency(%q<railties>.freeze, [">= 0"])
    s.add_dependency(%q<listen>.freeze, [">= 0"])
    s.add_dependency(%q<websocket-driver>.freeze, [">= 0"])
    s.add_dependency(%q<nio4r>.freeze, [">= 0"])
    s.add_dependency(%q<wrapped_print>.freeze, [">= 0"])
  end
end
