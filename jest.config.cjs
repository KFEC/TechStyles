module.exports = {
  collectCoverage: true,
  testEnvironment: 'jest-environment-node',
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(js|jsx)$",
  moduleFileExtensions: ["js", "json", "jsx"],
  modulePathIgnorePatterns: ["data"],
};