# Revisiting Rock Paper Scissors

## `git branch`

Branches in Git allow your repository to hold multiple alternate reality versions of your files at the same time. You’ve actually (sort of) been using branches since you made your first commit, you just might not have known it! Back in the setting up Git lesson when you ran git `config --global init.defaultBranch` main you were setting the name of what’s called the default branch for your repos. The default branch is just what we call the branch that is created when you make your first commit on a project, and in that command we set the name to be main as is the current standard.

You can make new branches by using the command `git branch <branch_name>`. You can then change to your new branch using `git checkout <branch_name>`. You can also create a new branch and change to it in a single command by using the `-b` flag with `checkout`, in the form `git checkout -b <branch_name>`. You can see all of your current branches using `git branch` with no other arguments.

Once you are done working on your feature branch and are ready to bring the commits that you’ve made on it to your main branch, you will need to perform what is known as a `merge`.

Merges are done by using the command `git merge <branch_name>` which will take the changes you’ve committed in `branch_name` and add them to the branch that you’re currently on. You can see an example of a `develop` branch being created, committed to, and then merged to `main` in the diagram below.

<img src="fig/git-branch.png" width=500>

Sometimes, the same lines in a file will have been changed by two different branches. When this happens, you will have a merge conflict when you try and merge those branches together. In order to finish merging the branches you will have to first resolve the conflict, which will be covered in a future lesson.

When you don’t need a branch anymore, it can be deleted using `git branch -d <branch_name>` if the branch has already been merged into `main`, or with `git branch -D <branch_name>` if it hasn’t.

### Sharing code

Another great use case for branches is to share code with others that you might not want to commit to your main branch (or feature branch) at all.

For example: if you have a bug in a new feature you’re working on that you can’t figure out, and it causes your code to break, you don’t want to commit that broken code and have it in your project’s “permanent record”. You could instead create a new temporary branch, switch to it and commit your code to this new branch. If you then push this new temporary branch to GitHub you can share it with others that may be able to help solve your problem. In the assignment below you will get some hands-on practice on making new branches.

## Assignment

1. Set up a new branch on your previous Rock Paper Scissors repo :white_check_mark:
    - Since we’ll be making a UI for our Rock Paper Scissors game, make a new branch and change to it with the command `git checkout -b rps-ui`.
    - You are now working in the `rps-ui` branch, locally. However, this branch does not exist in your remote repo yet. If you go to your github repo page, you’ll see that you only have 1 branch, which would be `main`. Let’s push this new branch to your remote repo with the command `git push origin rps-ui`. Now, you’ll see two branches in your GitHub repository! You can select the new branch on GitHub using the dropdown branch selector shown in the screenshot below.
    - Make sure you are on the `rps-ui` branch. You can check this, with the `git branch` command. The branch you are currently on will have an (*)asterisk next to it. If you’re in another branch for some reason, change to `rps-ui` with the command `git checkout rps-ui`. Now you’re all set to work on your new feature! Note: You can add files, commit to this branch, and push changes to your repo, just like you would with the main branch. Everything is the same except when you push the changes, you’d use `git push origin rps-ui` instead of `git push origin main`, since we’re pushing to our new branch.

2. In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt. :white_check_mark:
    - For now, remove the logic that plays exactly five rounds.
    - Create three buttons, one for each selection. Add an event listener to the buttons that call your `playRound` function with the correct `playerSelection` every time a button is clicked. (you can keep the `console.log`s for this step)
    - Add a `div` for displaying results and change all of your `console.log`s into DOM methods.
    - Display the running score, and announce a winner of the game once one player reaches 5 points.
    - You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.

3. Once you’re all done with your UI and made sure everything’s satisfactory, ensure all of your changes are committed to the `rps-ui` branch with `git status` before continuing. :white_check_mark:

4. Now let’s take a look at how we can merge the changes from our `rps-ui` branch back to our `main` branch. :white_check_mark:
    - Checkout the branch we want to merge INTO i.e. `main` with the command `git checkout main`.
    - Now let’s merge our `rps-ui` branch into `main`, our current branch, with `git merge rps-ui`.
    - If everything goes fine, our `rps-ui` branch is now successfully merged with main! Use `git log` and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the `main` branch. Now for our final step!
    - Let’s push our main branch into our remote repo by running `git push origin main` . Go to your GitHub repo and you’ll see that our `main` branch will have all the changes and commits you made to the `rps-ui` branch. Congratulations! You’ve successfully pushed your first feature into your production branch!
    - Now that we have all our code in the main branch, we don’t really need our `rps-ui` branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with `git branch -d rps-ui` and also delete it from the remote repo on GitHub with `git push origin --delete rps-ui`. Congrats, we’re all done with our cleanup!

5. Make sure to publish the project on GitHub Pages and add a live preview link in the project lesson. :white_check_mark:

## Knowledge check

* What are branches in git?

*Alternative reality* for your code.

* How do you create a new branch?

`git branch <new_branch>` or `git checkout -b <new_branch>`

* How do you merge a branch back into main?

First of all, go to `main` with `git checkout main`. Then run `git merge <branch_2_merge>`

* What is one use case for branches?

Separate development from production, and also share your code with others, without committing to the production branch.


## Additional resources

* Read the chapter on <a href="https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merging" target="_blank" rel="noopener noreferrer">Basic Branching and Merging</a> by Git-SCM to visualize and understand how branching and merging are used in real-world workflows, and discover why it’s such an amazing tool.
* Actively learn the Git workflows discussed in this lesson with this <a href="https://ndpsoftware.com/git-cheatsheet.html#loc=index;" target="_blank" rel="noopener noreferrer">interactive <strong>Visual Git Cheatsheet</strong></a> by Andrew Peterson. <strong>It’s okay to be unfamiliar</strong> with the variety of commands you’ll interact with. You’ll learn about them later in the curriculum.
* Make pushing your local commits to remote branches <strong>easier</strong> with the command <code>git push -u origin &lt;branch&gt;</code>. It automatically links the local branch you push with the remote one. <a href="https://www.educative.io/edpresso/what-is-the-git-push--u-remote-branch-name-command" target="_blank" rel="noopener noreferrer">Read Talha Ashar’s educative.io article</a> and commit faster to a remote branch with a <code>git push</code> command.
* Learn Git Branching by going through this <a href="https://learngitbranching.js.org/" target="_blank" rel="noopener noreferrer">interactive visualizer</a> by Peter Cottle. You can learn the substantial commands about branching while seeing how the commands you write affect your visually presented branch tree.
