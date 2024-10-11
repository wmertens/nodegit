{
  description = "A basic flake with a shell";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShell = pkgs.mkShell {

          nativeBuildInputs = with pkgs; [
            bashInteractive
            python3
            libkrb5
            e2fsprogs
            nodejs_22
            corepack_22
          ];

          # libgit2 needs these
          shellHook = ''
            export LD_LIBRARY_PATH=${pkgs.libkrb5}/lib:${pkgs.e2fsprogs.out}/lib
          '';
        };
      });
}
