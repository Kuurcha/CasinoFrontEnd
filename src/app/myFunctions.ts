import {Router} from "@angular/router";

export function goToPath(Path: string, router: Router ){
  console.log("goToPath " + Path);
  return router.navigate([Path])
}

