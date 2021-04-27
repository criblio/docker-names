# Docker Names

An implementation of [docker-names](https://github.com/moby/moby/blob/master/pkg/namesgenerator/names-generator.go) in TypeScript. This package unlike the normal docker name generator, generates with a `-` instead of an `_`.

## Usage

### Generate Name

```typescript
import {generateName} from '@criblinc/docker-names'

const dockerName = generateName();

console.log(dockerName);

//Outputs goofy-panini
```

### Generate Name With Number


```typescript
import {generateNameWithNumber} from '@criblinc/docker-names'

const dockerName = generateNameWithNumber();

console.log(dockerName);

//Outputs goofy-panini-4
```

## Words 

The words can also be imported from the package if need be.

```typescript
import {left,right} from '@criblinc/docker-names'

console.log(left);

//Outputs [admiring,adoring, etc...]

console.log(right)

//Outputs [albattani,allen, etc...]


```