Bundler.require(:default)

guard 'shell' do
  watch(/^demo-deck\.adoc$/) {|m|
    `./doc-gen-clean.sh`
  }
end
